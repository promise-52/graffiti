import './ConfirmButton.scss'

interface ConfirmButton {
  onClick: () => void;
  label: string;
  disabled: boolean
}

export default function ConfirmButton({ disabled, onClick, label }: ConfirmButton) {
  return (
    <button
      disabled={disabled}
      className="button-component text-pptelegraph"
      onClick={onClick}
    >
      { label }
    </button>
  )
}