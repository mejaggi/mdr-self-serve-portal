import { describe,it,expect } from 'vitest';
import { initialRequests,reviewRequest } from './portal-data';
describe('Approval-first wireframe',()=>{
 it('approval records Approved rather than running an operation',()=>{
  const request=initialRequests[0];
  if(!request) throw new Error('Missing pending sample request');
  expect(reviewRequest(request,true,'Approved for project').status).toBe('Approved');
 });
 it('rejection stops a pending operation',()=>{
  const request=initialRequests[0];
  if(!request) throw new Error('Missing pending sample request');
  expect(reviewRequest(request,false,'Not needed').status).toBe('Rejected');
 });
 it('a review cannot change an executing operation',()=>{
  const request=initialRequests[1];
  if(!request) throw new Error('Missing executing sample request');
  expect(reviewRequest(request,false,'Stop').status).toBe('Executing');
 });
});
