import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Capability, CaseStudy, TeamMember} from './interfaces';

@Injectable()
export class ApiService {
  // Right now we're just using this for grabbing data from json files here, but maybe we'll expand to having a real back end one day

  constructor(private httpClient: HttpClient) {
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
    let message = 'Something bad happened; please try again later.';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned a status code ${error.status}, ` +
        `Code was: ${JSON.stringify(error.error.code)}, ` +
        `Message was: ${JSON.stringify(error.error.message)}`);
      message = error.error.message;
    }
    // return an observable with a user-facing error message
    // FIXME: Log all error messages to Google Analytics
    return throwError(message);
  }
}
