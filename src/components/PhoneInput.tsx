import { Input } from '@/components/ui/input';

export function PhoneInput({
  handleChange,
  value,
}: {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
}) {
  return (
    <Input
      onChange={handleChange}
      className="h-14 text-xl"
      type="tel"
      placeholder="Phone number"
      value={value}
    />
  );
}
