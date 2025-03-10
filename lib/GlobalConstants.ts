

export default class GlobalConstants {
  static isDevMode = false;
  static DEFAULT_COLOR = '#2b9dff';
  static MAX_IMAGE_SIZE = 10; // 10MB
  static DEFAULT_MAX_LENGTH = 120;
  static MAX_LENGTH_25 = 25;
  static MAX_LENGTH_50 = 50;
  static MAX_LENGTH_200 = 200;
  static MAX_LENGTH_1000 = 1000;
  static MAX_LENGTH_NUMBER = 9;
  static MAX_LENGTH_EDITOR = 10000;
  static NOTIFICATION_INTERVAL = 10;
  static FONT_LIST = [
    '굴림'
    ,'궁서'
    ,'궁서체'
    ,'돋움'
    ,'돋움체'
    ,'바탕'
    ,'바탕체'
    ,'휴먼엽서체'
    , 'Arial'
    , 'Arial Black'
    , 'Arial Narrow'
    , 'Arial Rounded MT Bold'
    , 'Bookman Old Style'
    , 'Bradley Hand ITC'
    , 'Century'
    , 'Century Gothic'
    , 'Comic Sans MS'
    , 'Courier'
    , 'Courier New'
    , 'Georgia'
    , 'Gentium'
    , 'Impact'
    , 'King'
    , 'Lucida Console'
    , 'Lalit'
    , 'Modena'
    , 'Monotype Corsiva'
    , 'Papyrus'
    , 'Tahoma'
    , 'TeX'
    , 'Times'
    , 'Times New Roman'
    , 'Trebuchet MS'
    , 'Verdana'
    , 'Verona'
  ];


  static editorOption = {
    // Some Quill options...
    theme: 'snow',
    modules: {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],
          // [{ 'font': [] }],
          [{ 'align': [] }],
          ['link', 'image', 'video'],
          ['clean'],
          [{table: ['newtable_1_1', 'newtable_1_2', 'newtable_1_3', 'newtable_1_4', 'newtable_1_5', 'newtable_2_1', 'newtable_2_2', 'newtable_2_3', 'newtable_2_4', 'newtable_2_5', 'newtable_3_1', 'newtable_3_2', 'newtable_3_3', 'newtable_3_4', 'newtable_3_5', 'newtable_4_1', 'newtable_4_2', 'newtable_4_3', 'newtable_4_4', 'newtable_4_5', 'newtable_5_1', 'newtable_5_2', 'newtable_5_3', 'newtable_5_4', 'newtable_5_5', 'newtable_6_1', 'newtable_6_2', 'newtable_6_3', 'newtable_6_4', 'newtable_6_5', 'newtable_7_1', 'newtable_7_2', 'newtable_7_3', 'newtable_7_4', 'newtable_7_5', 'newtable_8_1', 'newtable_8_2', 'newtable_8_3', 'newtable_8_4', 'newtable_8_5', 'newtable_9_1', 'newtable_9_2', 'newtable_9_3', 'newtable_9_4', 'newtable_9_5', 'newtable_10_1', 'newtable_10_2', 'newtable_10_3', 'newtable_10_4', 'newtable_10_5']}, {table: 'append-row'}, {table: 'append-col'}],
        ],
      },
      imageResize: {
         modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
      },
      videoResize: {

      },
      table: true
    },
  };
  static UPLOAD_FAIL = '업로드 실패';

}
