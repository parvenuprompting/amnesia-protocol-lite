export type DialogState =
  | {
      open: true;
      title: string;
      message: string;
      input?: string;
      onConfirm: (value?: string) => void;
      onCancel: () => void;
    }
  | { open: false };
