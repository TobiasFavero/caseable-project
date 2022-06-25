import * as Yup from "yup";
import { productSchema } from "./productSchema";

export const caseSchema = productSchema.shape({
  color: Yup.string().required("Color is required"),
  device: Yup.string().required("Device is required"),
  dimensions: Yup.object().required("Dimensions are required"),
  protection_level: Yup.string().required("Protection level is required"),
});
