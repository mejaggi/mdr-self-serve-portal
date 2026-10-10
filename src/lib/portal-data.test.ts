import { describe,it,expect } from 'vitest';
import { initialRequests,reviewRequest } from './portal-data';
describe('Approval-first wireframe',()=>{
 it('approval records Approved rather than running an operation',()=>{
  const request=initialRequests[0];
  expect(reviewRequest(request,true,'Approved for project').status).toBe('Approved');
 });
 it('rejection stops a pending operation',()=>{
  expect(reviewRequest(initialRequests[0],false,'Not needed').status).toBe('Rejected');
 });
 it('a review cannot change an executing operation',()=>{
  expect(reviewRequest(initialRequests[1],false,'Stop').status).toBe('Executing');
 });
});
