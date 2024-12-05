import { Input } from '@/components/ui/input';

export function PhoneInput({
  handleChange,
}: {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}) {
  return (
    <Input
      onChange={handleChange}
      className="h-14 text-xl"
      type="tel"
      placeholder="Phone number"
    />
  );
}
