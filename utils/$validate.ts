import * as yup from 'yup';
export default async (errors: any, schema: any, data: any):Promise<boolean> => {
		try {
			// Clear previous errors
			Object.keys(errors).forEach(key => delete errors[key])

			// Validate the form data against the schema
			await schema.validate(data, { abortEarly: false })
			// console.log('Validation passed')
			return true
		} catch (error) {
			if (error instanceof yup.ValidationError) {
				// Handle validation errors
				error.inner.forEach((err) => {
					if (err.path) {
						errors[err.path] = err.message
					}
				})
			}
			return false
		}
};
