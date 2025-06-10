export function noSpaceString(word:string): string{
  return word.split(" ").join("").toLowerCase();
}
