import * as Yup from "yup";
import {
  productSchema,
  PRODUCT_FIELDS,
  PRODUCT_TYPES_OPTIONS,
  PRODUCT_TYPE_FIELD_NAME,
} from "./productSchema";

export const CASES_COLORS_OPTIONS = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
];

export const CASES_PROTECTION_LEVELS_OPTIONS = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

export const CASES_DEVICES_OPTIONS = [
  { value: "iphone_11", label: "iPhone 11" },
  { value: "iphone_12", label: "iPhone 12" },
  { value: "iphone_13", label: "iPhone 13" },
];

export const PHONE_CASE_FIELDS = {
  color: { value: "color", label: "Color", options: CASES_COLORS_OPTIONS },
  device: { value: "device", label: "Device", options: CASES_DEVICES_OPTIONS },
  protection_level: {
    value: "protection_level",
    label: "Protection Level",
    options: CASES_PROTECTION_LEVELS_OPTIONS,
  },
  dimensions: { value: "dimensions", label: "Dimensions" },
};

const validProtectionLevels = CASES_PROTECTION_LEVELS_OPTIONS.map(
  (option) => option.value
);

const validDevices = CASES_DEVICES_OPTIONS.map((option) => option.value);

const validColors = CASES_COLORS_OPTIONS.map((option) => option.value);

export const phoneCaseSchema = productSchema.shape({
  [PHONE_CASE_FIELDS.color.value]: Yup.string()
    .required("Color is required")
    .oneOf(
      validColors,
      "Color must be one of the following: " + validColors.join(", ")
    ),
  [PHONE_CASE_FIELDS.device.value]: Yup.string()
    .required("Device is required")
    .oneOf(
      validDevices,
      "Device must be one of the following: " + validDevices.join(", ")
    ),
  [PHONE_CASE_FIELDS.dimensions.value]: Yup.string()
    .required("Dimensions are required")
    .matches(
      /^\d+(\.\d+)? x \d+(\.\d+)? x \d+(\.\d+)?$/,
      "The dimensions must be in mm in the format: x x x (width, height, depth)"
    ),
  [PHONE_CASE_FIELDS.protection_level.value]: Yup.string()
    .required("Protection level is required")
    .oneOf(
      validProtectionLevels,
      "Protection level must be one of the following: " +
        validProtectionLevels.join(", ")
    ),
});

export const PHONE_CASE_FORM_INITIAL_VALUES = {
  [PRODUCT_FIELDS.id.value]: "",
  [PRODUCT_FIELDS.price.value]: "",
  [PRODUCT_FIELDS.name.value]: "",
  [PRODUCT_FIELDS.description.value]: "",
  [PRODUCT_TYPE_FIELD_NAME]: PRODUCT_TYPES_OPTIONS[0].value,
  [PRODUCT_FIELDS.image_link.value]: "",
  [PHONE_CASE_FIELDS.color.value]: CASES_COLORS_OPTIONS[0].value,
  [PHONE_CASE_FIELDS.device.value]: CASES_DEVICES_OPTIONS[0].value,
  [PHONE_CASE_FIELDS.protection_level.value]:
    CASES_PROTECTION_LEVELS_OPTIONS[0].value,
  [PHONE_CASE_FIELDS.dimensions.value]: "",
};
