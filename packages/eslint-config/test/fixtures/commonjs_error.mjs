// ESMではパースできないがcommon.jsではパースできてかつエラー
/* eslint-disable no-console */
with (this) {
    console.assert(009 === 9);
    console.assert(010 !== 10);

    console.assert('\7' === '\u0007');
    console.assert('\7' !== '7');

    console.assert('\8' !== '\u0008');
    console.assert('\8' === '8');
}
/* eslint-enable no-console */
