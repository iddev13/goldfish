import { FC } from "react"
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