import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {BrandValue, Capability, CaseStudy, TeamMember} from './interfaces';

@Injectable()
export class ApiService {
  // Right now we're just using this for grabbing data from json files here, but maybe we'll expand to having a real back end one day

  constructor(private httpClient: HttpClient) {
  }

  public getBrandValues(): Observable<BrandValue[]> {
    return this.httpClient.get<BrandValue[]>('./assets/json/values.json')
      .pipe((catchError(this.handleError)));
  }

  public getCapabilities(): Observable<Capability[]> {
    return this.httpClient.get<Capability[]>('./assets/json/capabilities.json')
      .pipe((catchError(this.handleError)));
  }

  public getCaseStudies(): Observable<CaseStudy[]> {
    return this.httpClient.get<CaseStudy[]>('./assets/json/case-studies.json')
      .pipe((catchError(this.handleError)));
  }

  public getTeamMembers(): Observable<TeamMember[]> {
    return this.httpClient.get<TeamMember[]>('./assets/json/team-members.json')
      .pipe((catchError(this.handleError)));
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error);
  }
}
