import moment from "moment";
export default (value: any, format = 'YYYYMMDD', seconds = '') => {
	if (!value) {
		return "";
	}
	return seconds ? moment(value,format).seconds(Number(seconds)).toDate() : moment(value,format).toDate();
};
