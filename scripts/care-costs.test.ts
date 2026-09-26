import { describe,expect,test } from 'bun:test';
import {calculateCareCost,EXAMPLE,EMPTY} from '../src/lib/care-costs';
describe('care-cost worksheet',()=>{
 test('uses 52 weeks divided by 12 and never invents funded hours',()=>{const r=calculateCareCost(EXAMPLE);expect(r.valid).toBe(true);expect(r.gap).toBe(10);expect(r.monthly).toBeCloseTo(1733.333333);});
 test('accounts for minimum visits',()=>{const r=calculateCareCost({...EXAMPLE,minimum:'3'});expect(r.billed).toBe(15);expect(r.monthly).toBe(2600);});
 test('does not bill visit minimums when there is no paid gap',()=>{const r=calculateCareCost({...EXAMPLE,needed:'10'});expect(r.billed).toBe(0);expect(r.monthly).toBe(0);});
 test('adds monthly extras once and applies entered tax',()=>{const r=calculateCareCost({...EXAMPLE,extras:'100',tax:'13'});expect(r.monthly).toBeCloseTo((400*52/12+100)*1.13);});
 test('rejects overlapping support',()=>expect(calculateCareCost({...EXAMPLE,publicHours:'30'}).valid).toBe(false));
 test('rejects missing fields rather than displaying zero',()=>expect(calculateCareCost(EMPTY).valid).toBe(false));
 test('rejects negatives, infinity and invalid visit schedules',()=>{for(const patch of [{rate:'-1'},{rate:'Infinity'},{visits:'1.5'},{visits:'0'},{needed:'169'},{minimum:'25'},{tax:'101'},{minimum:'24',visits:'8'}])expect(calculateCareCost({...EXAMPLE,...patch}).valid).toBe(false);});
 test('allows a zero-support plan but retains non-care monthly charges',()=>{const r=calculateCareCost({...EMPTY,needed:'0',rate:'0',visits:'0',extras:'50'});expect(r.valid).toBe(true);expect(r.monthly).toBe(50);});
});
