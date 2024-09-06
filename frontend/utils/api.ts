import axios from 'axios';
import { ChartData, CandlestickData, LineChartData, BarChartData, PieChartData } from '../types/chartTypes';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const api = axios.create({
  baseURL: API_URL,
});
export const fetchCandlestickData = async (): Promise<ChartData<CandlestickData>> => {
  const response = await api.get(`${API_URL}/api/candlestick-data/`);
  return response.data;
};

export const fetchLineChartData = async (): Promise<ChartData<LineChartData>> => {
  const response = await api.get(`${API_URL}/api/line-chart-data/`);
  return response.data;
};

export const fetchBarChartData = async (): Promise<ChartData<BarChartData>> => {
  const response = await api.get(`${API_URL}/api/bar-chart-data/`);
  return response.data;
};

export const fetchPieChartData = async (): Promise<ChartData<PieChartData>> => {
  const response = await api.get(`${API_URL}/api/pie-chart-data/`);
  return response.data;
};