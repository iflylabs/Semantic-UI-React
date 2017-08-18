'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALL_ICONS_IN_ALL_CONTEXTS = exports.COMPONENT_CONTEXT_SPECIFIC_ICONS = exports.ICONS_AND_ALIASES = exports.ICON_ALIASES = exports.ICONS = exports.NETWORKS_AND_WEBSITE_ICONS = exports.PAYMENT_OPTIONS_ICONS = exports.CURRENCY_ICONS = exports.TEXT_EDITOR_ICONS = exports.TABLES_ICONS = exports.MAP_LOCATIONS_TRANSPORTATION_ICONS = exports.AUDIO_ICONS = exports.RATING_ICONS = exports.TECHNOLOGIES_ICONS = exports.FILE_SYSTEM_ICONS = exports.COMPUTER_ICONS = exports.MOBILE_ICONS = exports.POINTERS_ICONS = exports.MEDIA_ICONS = exports.ITEM_SELECTION_ICONS = exports.SHAPES_ICONS = exports.LITERAL_OBJECTS_ICONS = exports.VIEW_ADJUSTMENT_ICONS = exports.ACCESSIBILITY_ICONS = exports.GENDER_SEXUALITY_ICONS = exports.USERS_ICONS = exports.MESSAGES_ICONS = exports.USER_ACTIONS_ICONS = exports.WEB_CONTENT_ICONS = exports.TRANSITIONS = exports.STATIC_TRANSITIONS = exports.DIRECTIONAL_TRANSITIONS = exports.WIDTHS = exports.VISIBILITY = exports.VERTICAL_ALIGNMENTS = exports.TEXT_ALIGNMENTS = exports.SIZES = exports.FLOATS = exports.COLORS = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _values2 = require('lodash/values');

var _values3 = _interopRequireDefault(_values2);

var _keys2 = require('lodash/keys');

var _keys3 = _interopRequireDefault(_keys2);

var _numberToWord = require('./numberToWord');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COLORS = exports.COLORS = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
var FLOATS = exports.FLOATS = ['left', 'right'];
var SIZES = exports.SIZES = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];
var TEXT_ALIGNMENTS = exports.TEXT_ALIGNMENTS = ['left', 'center', 'right', 'justified'];
var VERTICAL_ALIGNMENTS = exports.VERTICAL_ALIGNMENTS = ['bottom', 'middle', 'top'];

var VISIBILITY = exports.VISIBILITY = ['mobile', 'tablet', 'computer', 'large screen', 'widescreen'];

var WIDTHS = exports.WIDTHS = [].concat((0, _toConsumableArray3.default)((0, _keys3.default)(_numberToWord.numberToWordMap)), (0, _toConsumableArray3.default)((0, _keys3.default)(_numberToWord.numberToWordMap).map(Number)), (0, _toConsumableArray3.default)((0, _values3.default)(_numberToWord.numberToWordMap)));

var DIRECTIONAL_TRANSITIONS = exports.DIRECTIONAL_TRANSITIONS = ['scale', 'fade', 'fade up', 'fade down', 'fade left', 'fade right', 'horizontal flip', 'vertical flip', 'drop', 'fly left', 'fly right', 'fly up', 'fly down', 'swing left', 'swing right', 'swing up', 'swing down', 'browse', 'browse right', 'slide down', 'slide up', 'slide right'];
var STATIC_TRANSITIONS = exports.STATIC_TRANSITIONS = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce'];
var TRANSITIONS = exports.TRANSITIONS = [].concat(DIRECTIONAL_TRANSITIONS, STATIC_TRANSITIONS);

// Generated from:
// https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/components/icon.css
var WEB_CONTENT_ICONS = exports.WEB_CONTENT_ICONS = ['search', 'mail outline', 'signal', 'setting', 'home', 'inbox', 'browser', 'tag', 'tags', 'image', 'calendar', 'comment', 'shop', 'comments', 'external', 'privacy', 'settings', 'comments', 'external', 'trophy', 'payment', 'feed', 'alarm outline', 'tasks', 'cloud', 'lab', 'mail', 'dashboard', 'comment outline', 'comments outline', 'sitemap', 'idea', 'alarm', 'terminal', 'code', 'protect', 'calendar outline', 'ticket', 'external square', 'bug', 'mail square', 'history', 'options', 'text telephone', 'find', 'wifi', 'alarm mute', 'alarm mute outline', 'copyright', 'at', 'eyedropper', 'paint brush', 'heartbeat', 'mouse pointer', 'hourglass empty', 'hourglass start', 'hourglass half', 'hourglass end', 'hourglass full', 'hand pointer', 'trademark', 'registered', 'creative commons', 'add to calendar', 'remove from calendar', 'delete calendar', 'checked calendar', 'industry', 'shopping bag', 'shopping basket', 'hashtag', 'percent', 'address book', 'address book outline', 'address card', 'address card outline', 'id badge', 'id card', 'id card outline', 'podcast', 'window close', 'window close outline', 'window maximize', 'window minimize', 'window restore'];
var USER_ACTIONS_ICONS = exports.USER_ACTIONS_ICONS = ['wait', 'download', 'repeat', 'refresh', 'lock', 'bookmark', 'print', 'write', 'adjust', 'theme', 'edit', 'external share', 'ban', 'mail forward', 'share', 'expand', 'compress', 'unhide', 'hide', 'random', 'retweet', 'sign out', 'pin', 'sign in', 'upload', 'call', 'remove bookmark', 'call square', 'unlock', 'configure', 'filter', 'wizard', 'undo', 'exchange', 'cloud download', 'cloud upload', 'reply', 'reply all', 'erase', 'unlock alternate', 'write square', 'share square', 'archive', 'translate', 'recycle', 'send', 'send outline', 'share alternate', 'share alternate square', 'add to cart', 'in cart', 'add user', 'remove user', 'object group', 'object ungroup', 'clone', 'talk', 'talk outline'];
var MESSAGES_ICONS = exports.MESSAGES_ICONS = ['help circle', 'info circle', 'warning circle', 'warning sign', 'announcement', 'help', 'info', 'warning', 'birthday', 'help circle outline'];
var USERS_ICONS = exports.USERS_ICONS = ['user', 'users', 'doctor', 'handicap', 'student', 'child', 'spy', 'user circle', 'user circle outline', 'user outline'];
var GENDER_SEXUALITY_ICONS = exports.GENDER_SEXUALITY_ICONS = ['female', 'male', 'woman', 'man', 'non binary transgender', 'intergender', 'transgender', 'lesbian', 'gay', 'heterosexual', 'other gender', 'other gender vertical', 'other gender horizontal', 'neuter', 'genderless'];
var ACCESSIBILITY_ICONS = exports.ACCESSIBILITY_ICONS = ['universal access', 'wheelchair', 'blind', 'audio description', 'volume control phone', 'braille', 'asl', 'assistive listening systems', 'deafness', 'sign language', 'low vision'];
var VIEW_ADJUSTMENT_ICONS = exports.VIEW_ADJUSTMENT_ICONS = ['block layout', 'grid layout', 'list layout', 'zoom', 'zoom out', 'resize vertical', 'resize horizontal', 'maximize', 'crop'];
var LITERAL_OBJECTS_ICONS = exports.LITERAL_OBJECTS_ICONS = ['cocktail', 'road', 'flag', 'book', 'gift', 'leaf', 'fire', 'plane', 'magnet', 'lemon', 'world', 'travel', 'shipping', 'money', 'legal', 'lightning', 'umbrella', 'treatment', 'suitcase', 'bar', 'flag outline', 'flag checkered', 'puzzle', 'fire extinguisher', 'rocket', 'anchor', 'bullseye', 'sun', 'moon', 'fax', 'life ring', 'bomb', 'soccer', 'calculator', 'diamond', 'sticky note', 'sticky note outline', 'law', 'hand peace', 'hand rock', 'hand paper', 'hand scissors', 'hand lizard', 'hand spock', 'tv', 'thermometer empty', 'thermometer full', 'thermometer half', 'thermometer quarter', 'thermometer three quarters', 'bath', 'snowflake outline'];
var SHAPES_ICONS = exports.SHAPES_ICONS = ['crosshairs', 'asterisk', 'square outline', 'certificate', 'square', 'quote left', 'quote right', 'spinner', 'circle', 'ellipsis horizontal', 'ellipsis vertical', 'cube', 'cubes', 'circle notched', 'circle thin'];
var ITEM_SELECTION_ICONS = exports.ITEM_SELECTION_ICONS = ['checkmark', 'remove', 'checkmark box', 'move', 'add circle', 'minus circle', 'remove circle', 'check circle', 'remove circle outline', 'check circle outline', 'plus', 'minus', 'add square', 'radio', 'minus square', 'minus square outline', 'check square', 'selected radio', 'plus square outline', 'toggle off', 'toggle on'];
var MEDIA_ICONS = exports.MEDIA_ICONS = ['film', 'sound', 'photo', 'bar chart', 'camera retro', 'newspaper', 'area chart', 'pie chart', 'line chart'];
var POINTERS_ICONS = exports.POINTERS_ICONS = ['arrow circle outline down', 'arrow circle outline up', 'chevron left', 'chevron right', 'arrow left', 'arrow right', 'arrow up', 'arrow down', 'chevron up', 'chevron down', 'pointing right', 'pointing left', 'pointing up', 'pointing down', 'arrow circle left', 'arrow circle right', 'arrow circle up', 'arrow circle down', 'caret down', 'caret up', 'caret left', 'caret right', 'angle double left', 'angle double right', 'angle double up', 'angle double down', 'angle left', 'angle right', 'angle up', 'angle down', 'chevron circle left', 'chevron circle right', 'chevron circle up', 'chevron circle down', 'toggle down', 'toggle up', 'toggle right', 'long arrow down', 'long arrow up', 'long arrow left', 'long arrow right', 'arrow circle outline right', 'arrow circle outline left', 'toggle left'];
var MOBILE_ICONS = exports.MOBILE_ICONS = ['tablet', 'mobile', 'battery full', 'battery high', 'battery medium', 'battery low', 'battery empty'];
var COMPUTER_ICONS = exports.COMPUTER_ICONS = ['power', 'trash outline', 'disk outline', 'desktop', 'laptop', 'game', 'keyboard', 'plug'];
var FILE_SYSTEM_ICONS = exports.FILE_SYSTEM_ICONS = ['trash', 'file outline', 'folder', 'folder open', 'file text outline', 'folder outline', 'folder open outline', 'level up', 'level down', 'file', 'file text', 'file pdf outline', 'file word outline', 'file excel outline', 'file powerpoint outline', 'file image outline', 'file archive outline', 'file audio outline', 'file video outline', 'file code outline'];
var TECHNOLOGIES_ICONS = exports.TECHNOLOGIES_ICONS = ['qrcode', 'barcode', 'rss', 'fork', 'html5', 'css3', 'rss square', 'openid', 'database', 'server', 'usb', 'bluetooth', 'bluetooth alternative', 'microchip'];
var RATING_ICONS = exports.RATING_ICONS = ['heart', 'star', 'empty star', 'thumbs outline up', 'thumbs outline down', 'star half', 'empty heart', 'smile', 'frown', 'meh', 'star half empty', 'thumbs up', 'thumbs down'];
var AUDIO_ICONS = exports.AUDIO_ICONS = ['music', 'video play outline', 'volume off', 'volume down', 'volume up', 'record', 'step backward', 'fast backward', 'backward', 'play', 'pause', 'stop', 'forward', 'fast forward', 'step forward', 'eject', 'unmute', 'mute', 'video play', 'closed captioning', 'pause circle', 'pause circle outline', 'stop circle', 'stop circle outline'];
var MAP_LOCATIONS_TRANSPORTATION_ICONS = exports.MAP_LOCATIONS_TRANSPORTATION_ICONS = ['marker', 'coffee', 'food', 'building outline', 'hospital', 'emergency', 'first aid', 'military', 'h', 'location arrow', 'compass', 'space shuttle', 'university', 'building', 'paw', 'spoon', 'car', 'taxi', 'tree', 'bicycle', 'bus', 'ship', 'motorcycle', 'street view', 'hotel', 'train', 'subway', 'map pin', 'map signs', 'map outline', 'map'];
var TABLES_ICONS = exports.TABLES_ICONS = ['table', 'columns', 'sort', 'sort descending', 'sort ascending', 'sort alphabet ascending', 'sort alphabet descending', 'sort content ascending', 'sort content descending', 'sort numeric ascending', 'sort numeric descending'];
var TEXT_EDITOR_ICONS = exports.TEXT_EDITOR_ICONS = ['font', 'bold', 'italic', 'text height', 'text width', 'align left', 'align center', 'align right', 'align justify', 'list', 'outdent', 'indent', 'linkify', 'cut', 'copy', 'attach', 'save', 'content', 'unordered list', 'ordered list', 'strikethrough', 'underline', 'paste', 'unlinkify', 'superscript', 'subscript', 'header', 'paragraph', 'text cursor'];
var CURRENCY_ICONS = exports.CURRENCY_ICONS = ['euro', 'pound', 'dollar', 'rupee', 'yen', 'ruble', 'won', 'bitcoin', 'lira', 'shekel'];
var PAYMENT_OPTIONS_ICONS = exports.PAYMENT_OPTIONS_ICONS = ['paypal', 'google wallet', 'visa', 'mastercard', 'discover', 'american express', 'paypal card', 'stripe', 'japan credit bureau', 'diners club', 'credit card alternative'];
var NETWORKS_AND_WEBSITE_ICONS = exports.NETWORKS_AND_WEBSITE_ICONS = ['twitter square', 'facebook square', 'linkedin square', 'github square', 'twitter', 'facebook f', 'github', 'pinterest', 'pinterest square', 'google plus square', 'google plus', 'linkedin', 'github alternate', 'maxcdn', 'youtube square', 'youtube', 'xing', 'xing square', 'youtube play', 'dropbox', 'stack overflow', 'instagram', 'flickr', 'adn', 'bitbucket', 'bitbucket square', 'tumblr', 'tumblr square', 'apple', 'windows', 'android', 'linux', 'dribble', 'skype', 'foursquare', 'trello', 'gittip', 'vk', 'weibo', 'renren', 'pagelines', 'stack exchange', 'vimeo square', 'slack', 'wordpress', 'yahoo', 'google', 'reddit', 'reddit square', 'stumbleupon circle', 'stumbleupon', 'delicious', 'digg', 'pied piper', 'pied piper alternate', 'drupal', 'joomla', 'behance', 'behance square', 'steam', 'steam square', 'spotify', 'deviantart', 'soundcloud', 'vine', 'codepen', 'jsfiddle', 'rebel', 'empire', 'git square', 'git', 'hacker news', 'tencent weibo', 'qq', 'wechat', 'slideshare', 'twitch', 'yelp', 'lastfm', 'lastfm square', 'ioxhost', 'angellist', 'meanpath', 'buysellads', 'connectdevelop', 'dashcube', 'forumbee', 'leanpub', 'sellsy', 'shirtsinbulk', 'simplybuilt', 'skyatlas', 'facebook', 'pinterest', 'whatsapp', 'viacoin', 'medium', 'y combinator', 'optinmonster', 'opencart', 'expeditedssl', 'gg', 'gg circle', 'tripadvisor', 'odnoklassniki', 'odnoklassniki square', 'pocket', 'wikipedia', 'safari', 'chrome', 'firefox', 'opera', 'internet explorer', 'contao', '500px', 'amazon', 'houzz', 'vimeo', 'black tie', 'fonticons', 'reddit alien', 'microsoft edge', 'codiepie', 'modx', 'fort awesome', 'product hunt', 'mixcloud', 'scribd', 'gitlab', 'wpbeginner', 'wpforms', 'envira gallery', 'glide', 'glide g', 'viadeo', 'viadeo square', 'snapchat', 'snapchat ghost', 'snapchat square', 'pied piper hat', 'first order', 'yoast', 'themeisle', 'google plus circle', 'font awesome', 'bandcamp', 'eercast', 'etsy', 'free code camp', 'grav', 'imdb', 'linode', 'meetup', 'quora', 'ravelry', 'superpowers', 'telegram', 'wpexplorer'];
var ICONS = exports.ICONS = [].concat(WEB_CONTENT_ICONS, USER_ACTIONS_ICONS, MESSAGES_ICONS, USERS_ICONS, GENDER_SEXUALITY_ICONS, ACCESSIBILITY_ICONS, VIEW_ADJUSTMENT_ICONS, LITERAL_OBJECTS_ICONS, SHAPES_ICONS, ITEM_SELECTION_ICONS, MEDIA_ICONS, POINTERS_ICONS, MOBILE_ICONS, COMPUTER_ICONS, FILE_SYSTEM_ICONS, TECHNOLOGIES_ICONS, RATING_ICONS, AUDIO_ICONS, MAP_LOCATIONS_TRANSPORTATION_ICONS, TABLES_ICONS, TEXT_EDITOR_ICONS, CURRENCY_ICONS, PAYMENT_OPTIONS_ICONS, NETWORKS_AND_WEBSITE_ICONS);
var ICON_ALIASES = exports.ICON_ALIASES = ['like', 'favorite', 'video', 'check', 'close', 'cancel', 'delete', 'x', 'zoom in', 'magnify', 'shutdown', 'clock', 'time', 'play circle outline', 'headphone', 'camera', 'video camera', 'picture', 'pencil', 'compose', 'point', 'tint', 'signup', 'plus circle', 'question circle', 'dont', 'minimize', 'add', 'exclamation circle', 'attention', 'eye', 'exclamation triangle', 'shuffle', 'chat', 'cart', 'shopping cart', 'bar graph', 'key', 'cogs', 'discussions', 'like outline', 'dislike outline', 'heart outline', 'log out', 'thumb tack', 'winner', 'phone', 'bookmark outline', 'phone square', 'credit card', 'hdd outline', 'bullhorn', 'bell outline', 'hand outline right', 'hand outline left', 'hand outline up', 'hand outline down', 'globe', 'wrench', 'briefcase', 'group', 'linkify', 'chain', 'flask', 'sidebar', 'bars', 'list ul', 'list ol', 'numbered list', 'magic', 'truck', 'currency', 'triangle down', 'dropdown', 'triangle up', 'triangle left', 'triangle right', 'envelope', 'conversation', 'rain', 'clipboard', 'lightbulb', 'bell', 'ambulance', 'medkit', 'fighter jet', 'beer', 'plus square', 'computer', 'circle outline', 'gamepad', 'star half full', 'broken chain', 'question', 'exclamation', 'eraser', 'microphone', 'microphone slash', 'shield', 'target', 'play circle', 'pencil square', 'eur', 'gbp', 'usd', 'inr', 'cny', 'rmb', 'jpy', 'rouble', 'rub', 'krw', 'btc', 'gratipay', 'zip', 'dot circle outline', 'try', 'graduation', 'circle outline', 'sliders', 'weixin', 'tty', 'teletype', 'binoculars', 'power cord', 'wifi', 'visa card', 'mastercard card', 'discover card', 'amex', 'american express card', 'stripe card', 'bell slash', 'bell slash outline', 'area graph', 'pie graph', 'line graph', 'cc', 'sheqel', 'ils', 'plus cart', 'arrow down cart', 'detective', 'venus', 'mars', 'mercury', 'intersex', 'venus double', 'female homosexual', 'mars double', 'male homosexual', 'venus mars', 'mars stroke', 'mars alternate', 'mars vertical', 'mars stroke vertical', 'mars horizontal', 'mars stroke horizontal', 'asexual', 'facebook official', 'user plus', 'user times', 'user close', 'user cancel', 'user delete', 'user x', 'bed', 'yc', 'ycombinator', 'battery four', 'battery three', 'battery three quarters', 'battery two', 'battery half', 'battery one', 'battery quarter', 'battery zero', 'i cursor', 'jcb', 'japan credit bureau card', 'diners club card', 'balance', 'hourglass outline', 'hourglass zero', 'hourglass one', 'hourglass two', 'hourglass three', 'hourglass four', 'grab', 'hand victory', 'tm', 'r circle', 'television', 'five hundred pixels', 'calendar plus', 'calendar minus', 'calendar times', 'calendar check', 'factory', 'commenting', 'commenting outline', 'edge', 'ms edge', 'wordpress beginner', 'wordpress forms', 'envira', 'question circle outline', 'assistive listening devices', 'als', 'ald', 'asl interpreting', 'deaf', 'american sign language interpreting', 'hard of hearing', 'signing', 'new pied piper', 'theme isle', 'google plus official', 'fa', 'bathtub', 'drivers license', 'drivers license outline', 's15', 'thermometer', 'times rectangle', 'times rectangle outline', 'vcard', 'vcard outline'];
var ICONS_AND_ALIASES = exports.ICONS_AND_ALIASES = [].concat((0, _toConsumableArray3.default)(ICONS), ICON_ALIASES);

// Some icon names are not part of icons.css.
// These are only valid as children of other components.
// Their CSS rules are defined by a specific component's CSS.
// We don't want to show name warnings for those usages so we add them as valid names here.
var COMPONENT_CONTEXT_SPECIFIC_ICONS = exports.COMPONENT_CONTEXT_SPECIFIC_ICONS = ['left dropdown'];
var ALL_ICONS_IN_ALL_CONTEXTS = exports.ALL_ICONS_IN_ALL_CONTEXTS = [].concat((0, _toConsumableArray3.default)(ICONS_AND_ALIASES), COMPONENT_CONTEXT_SPECIFIC_ICONS);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(COLORS, 'COLORS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(FLOATS, 'FLOATS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(SIZES, 'SIZES', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(TEXT_ALIGNMENTS, 'TEXT_ALIGNMENTS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(VERTICAL_ALIGNMENTS, 'VERTICAL_ALIGNMENTS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(VISIBILITY, 'VISIBILITY', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(WIDTHS, 'WIDTHS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(DIRECTIONAL_TRANSITIONS, 'DIRECTIONAL_TRANSITIONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(STATIC_TRANSITIONS, 'STATIC_TRANSITIONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(TRANSITIONS, 'TRANSITIONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(WEB_CONTENT_ICONS, 'WEB_CONTENT_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(USER_ACTIONS_ICONS, 'USER_ACTIONS_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(MESSAGES_ICONS, 'MESSAGES_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(USERS_ICONS, 'USERS_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(GENDER_SEXUALITY_ICONS, 'GENDER_SEXUALITY_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(ACCESSIBILITY_ICONS, 'ACCESSIBILITY_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(VIEW_ADJUSTMENT_ICONS, 'VIEW_ADJUSTMENT_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(LITERAL_OBJECTS_ICONS, 'LITERAL_OBJECTS_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(SHAPES_ICONS, 'SHAPES_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(ITEM_SELECTION_ICONS, 'ITEM_SELECTION_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(MEDIA_ICONS, 'MEDIA_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(POINTERS_ICONS, 'POINTERS_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(MOBILE_ICONS, 'MOBILE_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(COMPUTER_ICONS, 'COMPUTER_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(FILE_SYSTEM_ICONS, 'FILE_SYSTEM_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(TECHNOLOGIES_ICONS, 'TECHNOLOGIES_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(RATING_ICONS, 'RATING_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(AUDIO_ICONS, 'AUDIO_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(MAP_LOCATIONS_TRANSPORTATION_ICONS, 'MAP_LOCATIONS_TRANSPORTATION_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(TABLES_ICONS, 'TABLES_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(TEXT_EDITOR_ICONS, 'TEXT_EDITOR_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(CURRENCY_ICONS, 'CURRENCY_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(PAYMENT_OPTIONS_ICONS, 'PAYMENT_OPTIONS_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(NETWORKS_AND_WEBSITE_ICONS, 'NETWORKS_AND_WEBSITE_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(ICONS, 'ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(ICON_ALIASES, 'ICON_ALIASES', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(ICONS_AND_ALIASES, 'ICONS_AND_ALIASES', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(COMPONENT_CONTEXT_SPECIFIC_ICONS, 'COMPONENT_CONTEXT_SPECIFIC_ICONS', 'src/lib/SUI.js');

  __REACT_HOT_LOADER__.register(ALL_ICONS_IN_ALL_CONTEXTS, 'ALL_ICONS_IN_ALL_CONTEXTS', 'src/lib/SUI.js');
}();

;