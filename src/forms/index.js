import styles from './_styles.scss';
import create from './create';
import { TextAlignment } from '../text-alignment';
import { Row, Column } from '../grid';
import { Button } from '../button';

const {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldInline,
  FormFieldButton,
} = create(styles, TextAlignment, Row, Column, Button);

export default FormField;
export {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldInline,
  FormFieldButton,
};