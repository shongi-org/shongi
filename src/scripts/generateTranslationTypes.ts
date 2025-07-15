import * as fs from 'fs';
import * as path from 'path';

// Utility function to flatten nested objects with dot notation
function flattenObject(obj: Record<string, unknown>, prefix = ''): Record<string, string> {
  return Object.keys(obj).reduce((acc: Record<string, string>, k: string) => {
    const pre = prefix.length ? `${prefix}.` : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flattenObject(obj[k] as Record<string, unknown>, `${pre}${k}`));
    } else if (typeof obj[k] === 'string') {
      acc[`${pre}${k}`] = obj[k] as string;
    }
    return acc;
  }, {});
}

// Get all translation keys from the English file (source of truth)
function getTranslationKeys(): string[] {
  try {
    const enFilePath = path.resolve(process.cwd(), 'public/locales/en.json');
    const enTranslations = JSON.parse(fs.readFileSync(enFilePath, 'utf8'));
    const flattenedKeys = flattenObject(enTranslations);
    return Object.keys(flattenedKeys);
  } catch (error) {
    console.error('Error reading translation files:', error);
    return [];
  }
}

// Generate TypeScript type definition file
function generateTypeDefinition() {
  const keys = getTranslationKeys();
  
  if (keys.length === 0) {
    console.error('No translation keys found!');
    return;
  }

  const typeDefinition = `// This file is auto-generated. DO NOT EDIT manually.
// To update, run 'npm run generate-translation-types'

/**
 * Type definition for all translation keys in the application.
 * Provides type safety and autocompletion for translation keys.
 */
export type TranslationKey =
  | ${keys.map(key => `"${key}"`).join('\n  | ')};

/**
 * Helper type for nested translation objects
 */
export type NestedTranslations = {
  [key: string]: string | NestedTranslations;
};

/**
 * Utility function to safely retrieve nested translations
 */
export function getNestedTranslation(obj: Record<string, unknown>, key: string): string | undefined {
  return key.split('.').reduce<unknown>((acc, part) =>
    acc && typeof acc === 'object' && acc !== null ? (acc as Record<string, unknown>)[part] : undefined,
    obj
  ) as string | undefined;
}
`;

  const typesDir = path.resolve(process.cwd(), 'src/types');
  if (!fs.existsSync(typesDir)) {
    fs.mkdirSync(typesDir, { recursive: true });
  }

  const outputPath = path.resolve(typesDir, 'translation-keys.ts');
  fs.writeFileSync(outputPath, typeDefinition);
  console.log(`Translation types generated at ${outputPath}`);
}

// Run the generator
generateTypeDefinition();
