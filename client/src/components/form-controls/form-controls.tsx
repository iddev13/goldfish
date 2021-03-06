import { FC, useState } from "react"
import './form-controls.scss'

type InputPropsType = {
	input: any,
	meta: any,
}

export const Input: FC<InputPropsType> = ({ input, meta, ...props }) => {
	// debugger
	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className="formControl__item">
				<input {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>{meta.error}</span>}
		</div>
	)
}

export const Textarea: FC<InputPropsType> = ({ input, meta, ...props }) => {
	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className="formControl__itemTextarea">
				<textarea {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>{meta.error}</span>}
		</div>
	)
}

export const Checkbox: FC<InputPropsType> = ({ input, meta, ...props }) => {

	let [checkboxValue, setCheckboxValue] = useState(false);

	const toggleValue = () => {
		if (checkboxValue) {
			setCheckboxValue(false)
		} else {
			setCheckboxValue(true);
		}
	}

	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className={`formControl__item checkbox ${checkboxValue ? "active" : ""}`} onClick={toggleValue}>
				<input {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>Check is required</span>}
		</div>
	)
}