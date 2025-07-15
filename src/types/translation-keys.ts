// This file is auto-generated. DO NOT EDIT manually.
// To update, run 'npm run generate-translation-types'

/**
 * Type definition for all translation keys in the application.
 * Provides type safety and autocompletion for translation keys.
 */
export type TranslationKey =
  | "greeting"
  | "welcomeMessage"
  | "welcomeToShongi"
  | "navbar.pastOrders"
  | "navbar.home"
  | "navbar.profile"
  | "navbar.login"
  | "navbar.services"
  | "navbar.testimonials"
  | "navbar.faqs"
  | "auth.signupAsAgent"
  | "auth.loginPhone"
  | "appointment.title"
  | "appointment.details"
  | "appointment.selectDate"
  | "appointment.schedule"
  | "appointment.timeframe"
  | "appointment.date"
  | "appointment.endTime"
  | "payment.option"
  | "payment.chooseOption"
  | "payment.method"
  | "payment.payNow"
  | "payment.payFull"
  | "payment.pay30"
  | "payment.payAfterService"
  | "payment.platformFee"
  | "payment.vat"
  | "payment.methods.bkash"
  | "payment.methods.nagad"
  | "payment.methods.card"
  | "payment.methods.cash"
  | "cart.title"
  | "cart.summary"
  | "cart.placeOrder"
  | "cart.orderSuccess"
  | "cart.orderNote"
  | "cart.addToCart"
  | "form.submit"
  | "form.next"
  | "form.additionalDetails"
  | "guest.moveOn"
  | "package.4Hour"
  | "package.6Hour"
  | "package.8Hour"
  | "package.longTerm"
  | "gender.select"
  | "gender.male"
  | "gender.female"
  | "gender.other"
  | "gender.agentGender"
  | "address.home"
  | "address.hospital"
  | "address.servicePoint"
  | "address.addresses"
  | "whyChooseUs"
  | "dob"
  | "amount"
  | "or"
  | "transport.selectMode"
  | "transport.uber"
  | "transport.cng"
  | "transport.public"
  | "transport.ownCar"
  | "transport.uptoAgent"
  | "contactInfo"
  | "error.server"
  | "error.searchFailed"
  | "loading.fetchingOrder"
  | "loading.fetchingMedicines"
  | "loading.searching"
  | "medicine.generic"
  | "medicine.brand"
  | "medicine.quantity"
  | "medicine.title"
  | "medicine.searchPlaceholder"
  | "medicine.dosage"
  | "medicine.description"
  | "medicine.picture"
  | "order.cancel"
  | "order.confirmCancel"
  | "order.seeRunning"
  | "order.title"
  | "order.smsConfirmation"
  | "common.yes"
  | "common.no"
  | "common.seeDetails"
  | "common.showMore"
  | "common.showLess"
  | "common.search"
  | "common.taka"
  | "common.similarItems"
  | "common.seeMore"
  | "common.serviceImage"
  | "pharmacy.title"
  | "agent.assigned"
  | "agent.name"
  | "agent.phone"
  | "patients.title";

/**
 * Helper type for nested translation objects
 */
export type NestedTranslations = {
  [key: string]: string | NestedTranslations;
};

/**
 * Utility function to safely retrieve nested translations
 */
export function getNestedTranslation(obj: Record<string, unknown>, key: string): string | undefined {
  return key.split('.').reduce<unknown>((acc, part) =>
    acc && typeof acc === 'object' && acc !== null ? (acc as Record<string, unknown>)[part] : undefined,
    obj
  ) as string | undefined;
}
