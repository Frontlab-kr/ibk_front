import moment from "moment";
export default () => {
	const runtime = useRuntimeConfig();
	const IS_LOCAL = $isEmpty(runtime.public.IS_LOCAL) || runtime.public.IS_LOCAL == "false" ? false : true;
	return IS_LOCAL;
};
