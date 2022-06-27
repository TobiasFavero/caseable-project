import * as Yup from "yup";
import {
  CASES_COLORS_OPTIONS,
  CASES_DEVICES_OPTIONS,
  CASES_PROTECTION_LEVELS_OPTIONS,
} from "../config/constants";
import { productSchema, PRODUCT_FIELDS } from "./productSchema";

export const PHONE_CASE_FIELDS = {
  color: { value: "color", label: "Color" },
  device: { value: "device", label: "Device" },
  protection_level: { value: "protection_level", label: "Protection Level" },
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
  [PHONE_CASE_FIELDS.dimensions.value]: Yup.string().required(
    "Dimensions are required"
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
  [PRODUCT_FIELDS.price.value]: 0,
  [PRODUCT_FIELDS.name.value]: "",
  [PRODUCT_FIELDS.description.value]: "",
  [PRODUCT_FIELDS.product_type.value]: "case",
  [PRODUCT_FIELDS.image_link.value]: "",
  [PHONE_CASE_FIELDS.color.value]: "",
  [PHONE_CASE_FIELDS.device.value]: "",
  [PHONE_CASE_FIELDS.protection_level.value]: "",
  [PHONE_CASE_FIELDS.dimensions.value]: "",
};
