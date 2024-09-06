export interface CandlestickData {
    x: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }
  
  export interface LineChartData {
    name: string;
    value: number;
  }
  
  export interface BarChartData {
    name: string;
    value: number;
  }
  
  export interface PieChartData {
    name: string;
    value: number;
  }
  
  export interface ChartData<T> {
    data: T[];
  }