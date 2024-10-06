import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import styles from "./textarea.module.scss";

interface TTextareaProps {
	label: string;
	name: string;
	placeholder?: string;
	register: UseFormRegister<any>;
	required?: boolean;
	errors?: FieldError;
}

const Textarea: FC<TTextareaProps> = ({
	label,
	name,
	placeholder,
	register,
	required = false,
	errors,
}) => {
	return (
		<div className={styles.textareaContainer}>
			<label htmlFor={name}>{label}</label>
			<textarea
				id={name}
				placeholder={placeholder}
				{...register(name, { required })}
				className={errors ? styles.inputError : ""}

			/>
			{errors && (
				<p className={styles.errorMessage}>
					{errors.message || "This field is required"}
				</p>
			)}
		</div>
	);
};

export default Textarea;
