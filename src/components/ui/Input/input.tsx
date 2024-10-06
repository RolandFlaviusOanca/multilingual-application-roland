import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import styles from "./input.module.scss";

interface TInputProps {
	label: string;
	name: string;
	type?: string;
	placeholder?: string;
	register: UseFormRegister<any>;
	required?: boolean;
	errors?: FieldError;

}

const Input: FC<TInputProps> = ({
	label,
	name,
	type = "text",
	placeholder,
	register,
	required = false,
	errors,
}) => {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				type={type}
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

export default Input;
