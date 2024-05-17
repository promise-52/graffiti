import './Agreement.scss'


interface AgreementProps {
  checked: boolean;
  onCheckboxChange: (checked: boolean) => void;
}

export default function Agreement({ checked, onCheckboxChange }: AgreementProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(event.target.checked);
  };

  return (
    <label className="checkbox-component">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <a href='' className="text-pptelegraph checkbox-label">
        Согласие на обработку персональных данных
      </a>
    </label>
  );
};