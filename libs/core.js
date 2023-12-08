export const prodHost = "https://puzzle-inc.jp";
const stgHost = "";
export const devHost = "https://develop.d2gmw357lu97y1.amplifyapp.com";
const localHost = "http://localhost:3000";
export const host = prodHost;

export const imgPath = "./assets";

export const breakpoint = 767;
export const breakpointPC = 1024;

//制作実績ページの1ページに表示する最大記事数
export const workListPerPage = 15;

//Work個別ページのスクロールで媒体内の画像を移動させる
//アニメーション開始位置の調整 (前後200px見えた状態でアニメーションが開始・終了する)
export const adjustStartPosition = 200;

const shareURLEncoded = "";
const shareTextEncorded = `${shareURLEncoded}`;
export const twShareLink = `https://twitter.com/intent/tweet?text=${shareTextEncorded}`;
export const fbSshareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareURLEncoded}`;
export const lnSshareLink = `http://line.me/R/msg/text/?${shareTextEncorded}`;

export const easeOutCubic = "cubic-bezier(0.33, 1, 0.68, 1)";
export const easeOutCirc = "cubic-bezier(0, 0.55, 0.45, 1)";
export const easeOutQuint = "cubic-bezier(0.22, 1, 0.36, 1)";
export const easeOutExpo = "cubic-bezier(0.16, 1, 0.3, 1)";
export const easeOutQuart = "cubic-bezier(0.25, 1, 0.5, 1)";
export const easeOutBack = "cubic-bezier(0.34, 1.56, 0.64, 1)";
export const easeInCubic = "cubic-bezier(0.32, 0, 0.67, 0)";
export const easeInQuint = "cubic-bezier(0.64, 0, 0.78, 0)";
export const easeInBack = "cubic-bezier(0.36, 0, 0.66, -0.56)";

/**
 * 数値、文字列などの基本的な降順ソート
 * 差による計算が可能なものに限る、Object等はできない
 * @param {any} a ソート用第一引数
 * @param {any} b ソート用第二引数
 * @return {number} ソート用返り値、正負の値をチェックする
 */
export const sortDesc = (a, b) => {
  return b - a;
};

/**
 * yyyy.MM.dd 形式のDate用フォーマット関数
 * @param {Date} date フォーマット対象のDate
 * @return {Date} フォーマットされたDate
 */
export const getDateUnit = (date) => {
  var y = date.getFullYear().toString();
  var m = ("00" + (date.getMonth() + 1)).slice(-2);
  var d = ("00" + date.getDate()).slice(-2);
  return { y, m, d };
};

/**
 * Dateフォーマット関数
 * yyyy.MM.dd
 * @param {Date} date Date型の日付
 * @return {string} yyyy.MM.dd形式のフォーマット
 */
export const formatDateDot = (date) => {
  const dateUnit = getDateUnit(date);
  return `${dateUnit.y}.${dateUnit.m}.${dateUnit.d}`;
};

/**
 * Dateフォーマット関数
 * yyyy.MM
 * @param {Date} date Date型の日付
 * @return {string} yyyy.MM形式のフォーマット
 */
export const formatDateUntilMonthDot = (date) => {
  const dateUnit = getDateUnit(date);
  return `${dateUnit.y}.${dateUnit.m}`;
};

/**
 * Dateフォーマット関数
 * yyyy年MM月
 * @param {Date} date Date型の日付
 * @return {string} yyyy年MM月形式のフォーマット
 */
export const formatDateUntilMonthJa = (date) => {
  const dateUnit = getDateUnit(date);
  return `${dateUnit.y}年${dateUnit.m}月`;
};

/**
 * Dateフォーマット関数
 * a(曜日)
 * @param {Date} date Date型の日付
 * @return {string} aaa(曜日)形式のフォーマット
 */
export const formatDateDayOfWeekJa = (date) => {
  return ["日", "月", "火", "水", "木", "金", "土"][date.getDay()];
};

/**
 * 改行コード(\n)をJSXでの<br />に変換する機能
 * @param {string} text 改行コードを含んだ文字列
 * @returns {object} JSXで解釈可能な<br />を含んだオブジェクト
 */
export const lfToBr = (text) => {
  const texts = text.split(/[\\n|\n]/);
  return texts.map((t) => (t === "" ? <br /> : t));
};

/**
 * 文字列化しているDate情報をDateに変換する機能
 * @param {string} dateString 文字列化しているDate情報
 * @returns {Date} Date情報
 */
export const convertDateStringToDate = (dateString) => {
  return new Date(dateString);
};

/**
 * 文字列化しているDate情報から西暦部分を取得する機能
 * @param {string} dateString 文字列化しているDate情報
 * @return {string} 西暦
 */
export const getFullYearFromDateString = (dateString) => {
  const date = convertDateStringToDate(dateString);
  return date.getFullYear().toString();
};

/**
 * 文字列化しているDate情報から指定したフォーマットの日付に変換する機能
 * @param {string} dateString 文字列化しているDate情報
 * @param {Function} formatFunction 日付フォーマット関数
 * @return {string} フォーマットされた日付文字列
 */
export const getFromatedDateFromDateString = (dateString, formatFunction) => {
  const date = convertDateStringToDate(dateString);
  return formatFunction(date);
};

/**
 * 苗字と名前を"苗字 名前"の形式で結合する関数
 * @param {string} lastName 苗字
 * @param {string} firstName 名前
 * @return {string} "苗字 名前"形式の文字列
 */
export const assembleFullName = (lastName, firstName) => {
  return `${lastName} ${firstName}`;
};

/**
 * 配列の中身をシャッフルする関数
 * @param {Array} シャッフルしたい配列
 * @return {Array} シャッフルされた配列
 */
export const shuffleArray = (array) => {
  const cloneArray = [...array];

  const result = cloneArray.reduce((_, cur, idx) => {
    let rand = Math.floor(Math.random() * (idx + 1));
    cloneArray[idx] = cloneArray[rand];
    cloneArray[rand] = cur;
    return cloneArray;
  });

  return result;
};

/**
 * sleep関数
 * @param {number} msec 待機する時間、単位はミリ秒
 * @returns {Promise} 非同期用Promise
 */
export const sleep = (msec) =>
  new Promise((resolve) => setTimeout(resolve, msec));

/**
 * formatTag
 * タグのidと名前を整形してオブジェクトで返す。
 * MicroCMSと齟齬が発生しないように。
 * inputIdに入力した値を小文字変換し
 * idの正当性を保つ
 * @param {object} categoryListRef microCMSから得たカテゴリ情報(一件)
 * @param {string} inputId カテゴリ名
 *
 */
export const formatTag = (categoryListRef = null, inputId = null) => {
  let result = {};
  categoryListRef !== null
    ? categoryListRef.current.map((c) => {
        if (inputId.toUpperCase() === c.name.toUpperCase()) {
          // console.log(`inputId:${inputId}, c.name:${c.name}, c.id:${c.id}`);

          result = { name: c.name, id: c.id.toLowerCase() };
        } else if (inputId.toLowerCase() === "all") {
          result = { name: "All", id: "all" };
        }
      })
    : (() => {
        result = { name: inputId, id: inputId.toLowerCase() };
      })();
  return result;
};
