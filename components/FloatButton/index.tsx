import { ChevronUp } from "lucide-react";
import { Button } from "@heroui/react";

interface FloatingButtonProps {
  onClick?: () => void;
}

export function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
  <Button isIconOnly aria-label="Like" variant="light" onClick={onClick}>
         <ChevronUp height={36} width={36} />
  </Button>
  );
}

export default FloatingButton;
