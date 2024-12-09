import { Sheet } from "@/components/ui/common/sheet";
import { type DialogProps } from "@radix-ui/react-dialog";

type Props = DialogProps;

export function CartSheet({ ...props }: Props) {
  return <Sheet {...props} />;
}
