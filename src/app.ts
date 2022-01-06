// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from './hero';
import { TransformerHero } from './transformer';

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    new HumanHero(0, "Nedun", "female", 30, 25),
    new HumanHero(4, "Rebus", "female", 34, 42),
    new HumanHero(17, "Zsir", "male", 25, 51)
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    new TransformerHero(2, "Vasmarok", 4, 2, "roborock"),
    new TransformerHero(3, "Rézfácán", 2, 0, "hópehely"),
    new TransformerHero(6, "Alubaba", 8, 4, "vonósok")
];
