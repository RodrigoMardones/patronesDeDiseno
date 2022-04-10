import UFService from "../ufService";
import DolarService from "../DolarService";

export default class UFtoDolarAdapter {
  constructor(private ufService: UFService) {}
  UFtoDolarConversion(dolarValue: number): number {
    const dolarService = new DolarService(dolarValue);
    return (this.ufService.getUFValue()/dolarService.getDolarValue());
  }
}