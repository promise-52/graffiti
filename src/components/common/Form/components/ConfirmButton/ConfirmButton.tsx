import './ConfirmButton.scss'

interface ConfirmButton {
  onClick: () => void;
  label: string;
}

export default function ConfirmButton({ onClick, label }: ConfirmButton) {
  return (
    <button className="button-component text-pptelegraph" onClick={onClick}>
      { label }
    </button>
  )
}