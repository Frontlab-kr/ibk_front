import * as yup from 'yup';
export default () => {
	// 이건 null 만 체크. '' 값은 체크 안함.
	// return yup.mixed().required();

	return yup.mixed().required().test('not-empty', '빈 값을 넣을수 없습니다.', value => value !== '');
};
