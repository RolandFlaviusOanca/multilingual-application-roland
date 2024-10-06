"use client";

import Input from "@/components/ui/Input/input";
import { formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { z } from "zod";
import styles from "./homepageform.module.scss";
import Textarea from "@/components/ui/textarea/textarea";
import Button from "@/components/ui/button/button";

export default function HomepageForm() {
	const t = useTranslations();

	const createFormSchema = formSchema(t);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof createFormSchema>>({
		resolver: zodResolver(createFormSchema),
		defaultValues: {},
	});

	const onSubmit: SubmitHandler<z.infer<typeof createFormSchema>> = (data) => {
		console.log(data);
	};

	return (
		<div className={styles.formCard}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>{t("form.title")}</h2>
				<div className={styles.inputGroup}>
					<div className={styles.inputContainer}>
						<Input
							label={t("form.firstName")}
							name="firstName"
							register={register}
							errors={errors.firstName}
							required
							placeholder={t("form.firstName")}
						/>
					</div>
					<div className={styles.inputContainer}>
						<Input
							label={t("form.lastName")}
							name="lastName"
							register={register}
							errors={errors.lastName}
							required
							placeholder={t("form.lastName")}
						/>
					</div>
				</div>
				<div className={styles.inputGroup}>
					<div className={styles.inputContainer}>
						<Input
							label={t("form.email")}
							name="email"
							register={register}
							errors={errors.email}
                            type="email"
							required
							placeholder={t("form.email")}
						/>
					</div>
					<div className={styles.inputContainer}>
						<Input
							label={t("form.phoneNumber")}
							name="phoneNumber"
							register={register}
                            type="number"
							errors={errors.phoneNumber}
							required
							placeholder={t("form.phoneNumber")}
						/>
					</div>
				</div>
				<Textarea
					label={t("form.description")}
					name="description"
					register={register}
					errors={errors.description}
					required
					placeholder={t("form.description")}
				/>
				<Button
					type="submit"
					label={t("form.submit")}
					className={styles.button}
				/>
			</form>
		</div>
	);
}
