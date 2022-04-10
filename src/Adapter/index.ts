import UFtoDolarAdapter from "./lib/UFtoDolarAdapter";
import UFService from "./lib/ufService";

export default function main(){
  const ufValue = 27000;
  const dolarValue = 800;
  const ufToDolarAdapter = new UFtoDolarAdapter(
    new UFService(ufValue)
  )
  const conversion = ufToDolarAdapter.UFtoDolarConversion(dolarValue);
  console.log(conversion);
}