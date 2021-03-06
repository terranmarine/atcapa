import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TimeEntry } from "src/app/models/TimeEntry/TimeEntry";
import { TimeEntryType  } from "src/app/models/TimeEntry/TimeEntryType";

@Injectable({
  providedIn: 'root'
})
export class WeeklyOverviewService {

  private readonly API_TIME_ENTRY_TYPES_URL = 'https://app.apacta.com/api/v1/time_entry_types';
  private readonly API_TIME_ENTRIES_URL = 'https://app.apacta.com/api/v1/time_entries';
  private readonly API_KEY = '?api_key=dd3d895b-69f1-41fe-8249-3f46bbf11edf';
  
  constructor(private HTTP: HttpClient) { }

  public getTimeEntryTypes(): Observable<TimeEntryType[]> {
    return this.HTTP.get<TimeEntryType[]>(this.API_TIME_ENTRY_TYPES_URL + this.API_KEY);
  }

  public getTimeEntries(): Observable<TimeEntry[]> {
    return this.HTTP.get<any>(this.API_TIME_ENTRIES_URL + this.API_KEY);
  }
}
