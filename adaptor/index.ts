import { LegacySystem, LegacySystemAdapter } from "./adaptor";

const legacySystem = new LegacySystem();
const adapter = new LegacySystemAdapter(legacySystem);

console.log(adapter.requestNewData()); 
