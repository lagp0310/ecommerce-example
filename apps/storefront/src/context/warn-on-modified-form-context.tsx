"use client";

import React from "react";
import { useAdditionalInfoForm } from "@/context/additional-info-form-context";
import { useBillingAddressForm } from "@/context/billing-address-form-context";
import { useShippingAddressForm } from "@/context/shipping-address-form-context";
import { useDebitCardForm } from "@/context/debit-card-form-context";
import { useCreditCardForm } from "@/context/credit-card-form-context";
import { useCashForm } from "@/context/cash-form-context";

type WarnOnModifiedFormContext = {
  isAnyFormModified: boolean;
};
const WarnOnModifiedFormContext =
  React.createContext<WarnOnModifiedFormContext>({
    isAnyFormModified: false,
  });

export function useWarnOnModifiedForm() {
  const context = React.useContext(WarnOnModifiedFormContext);
  if (!context) {
    throw new Error(
      "useWarnOnModifiedForm must be used within a WarnOnModifiedFormContextProvider."
    );
  }

  return context;
}

type Props = {
  children: React.ReactNode;
};

export function WarnOnModifiedFormContextProvider({ children }: Props) {
  const {
    form: {
      formState: { isDirty: isBillingAddressFormDirty },
    },
  } = useBillingAddressForm();
  const {
    form: {
      formState: { isDirty: isShippingAddressFormDirty },
    },
  } = useShippingAddressForm();
  const {
    form: {
      formState: { isDirty: isAdditionalInfoFormDirty },
    },
  } = useAdditionalInfoForm();
  const {
    form: {
      formState: { isDirty: isDebitCardFormDirty },
    },
  } = useDebitCardForm();
  const {
    form: {
      formState: { isDirty: isCreditCardFormDirty },
    },
  } = useCreditCardForm();
  const {
    form: {
      formState: { isDirty: isCashFormDirty },
    },
  } = useCashForm();

  const [isAnyFormModified, setIsAnyFormModified] = React.useState(false);
  React.useEffect(() => {
    const isDirty =
      isBillingAddressFormDirty ||
      isShippingAddressFormDirty ||
      isAdditionalInfoFormDirty ||
      isDebitCardFormDirty ||
      isCreditCardFormDirty ||
      isCashFormDirty;

    setIsAnyFormModified(isDirty);
  }, [
    isAdditionalInfoFormDirty,
    isBillingAddressFormDirty,
    isCashFormDirty,
    isCreditCardFormDirty,
    isDebitCardFormDirty,
    isShippingAddressFormDirty,
  ]);

  const onBeforeUnloadHandler = React.useCallback(
    (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.stopPropagation();
      return isAnyFormModified ? false : true;
    },
    [isAnyFormModified]
  );
  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("beforeunload", onBeforeUnloadHandler);

    return () => {
      window.removeEventListener("beforeunload", onBeforeUnloadHandler);
    };
  }, [onBeforeUnloadHandler]);

  const providerValue = React.useMemo(
    () => ({ isAnyFormModified }),
    [isAnyFormModified]
  );

  return (
    <WarnOnModifiedFormContext.Provider value={providerValue}>
      {children}
    </WarnOnModifiedFormContext.Provider>
  );
}
