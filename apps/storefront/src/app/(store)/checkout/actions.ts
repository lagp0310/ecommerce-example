"use server";

export async function createOrder(formData: FormData) {
  const rawFormData = {
    firstName: formData.get("first-name"),
    lastName: formData.get("last-name"),
  };

  console.log(rawFormData);
}
