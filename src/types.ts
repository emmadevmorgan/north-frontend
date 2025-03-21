// src/types/awsSavings.ts

export interface AwsSavingsOverview {
    totalSavings: number;
    currentMonthSavings: number;
    percentageChange: number;
  }
  
  export interface SavingsTrend {
    month: string;
    savings: number;
  }
  
  export interface SavingsByCategory {
    service: string;
    savings: number;
  }
  
  export interface DetailedSaving {
    date: string; // YYYY-MM-DD format
    service: string;
    amount: number;
  }
  
  export interface AwsSavingsData {
    overview: AwsSavingsOverview;
    savingsTrends: SavingsTrend[];
    savingsByCategory: SavingsByCategory[];
    detailedSavings: DetailedSaving[];
  }
  