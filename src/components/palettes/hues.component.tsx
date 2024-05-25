import { IHuesProps } from './types';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const Hues = ({ palette, copyToClipboard }: IHuesProps) => (
  <article className='w-full bg-white shadow-2'>
    <table className='w-full h-full table-fixed border-spacing-3'>
      <thead>
        <tr>
          <th>{palette.name}</th>
          <th>Ratio</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {palette.hues.map((hue, index) => (
          <tr key={index}
              onClick={() => copyToClipboard(hue)}
              className={`hover:cursor-pointer hover:opacity-80 ${hue.lightForeground ? 'text-white' : 'text-slate-950'}`}
              style={{ backgroundColor: hue.hex }}
              role='button'
              aria-label='Copy the hexadecimal code of the color'>
            <td>{hue.name}</td>
            <td>{hue.contrastRatio} : 1</td>
            <td>{hue.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </article>
);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  Hues,
};
