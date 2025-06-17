import React, { useRef, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.scss";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
);

const Chart = ({ data }) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: data.labels,
    datasets: data.datasets.map((dataset) => {
      return { ...dataset, borderColor: "rgba(0, 0, 0, 1)", borderWidth: 1 };
    }),
  });

  const options = {
    animation: {
      onComplete: () => {},
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default") {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    // maintainAspectRatio: true,
    scales: {
      y: {
        grid: {
          color: "rgba(0, 0, 0, .2)",
        },
        ticks: {
          font: {
            family: "Spectral",
            size: 12,
            weight: "400",
            style: "italic",
          },
          color: "rgba(0, 0, 0, 1)",
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          font: { family: "Spectral", size: 12, weight: "400" },
          color: "rgba(0, 0, 0, 1)",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: { family: "Spectral", size: 12, weight: "400" },
          color: "rgba(0, 0, 0, 1)",
        },
      },
      tooltip: {
        usePointStyle: true,
        backgroundColor: "rgba(255, 255, 255, 1)",
        cornerRadius: 0,
        bodyColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 1)",
        caretSize: 0,
        titleFont: { family: "Spectral", size: 12, weight: "600" },
        bodyFont: { family: "Spectral", size: 12, weight: "normal" },
      },
      title: {
        display: true,
        text: data.title,
        font: { family: "Spectral", size: 24, weight: "400" },
        color: "rgba(0, 0, 0, 1)",
        padding: { bottom: 30 },
      },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the chart when it enters the viewport
            // setChartData({
            //   ...chartData,
            //   datasets: [
            //     { ...chartData.datasets[0], data: [12, 19, 3, 5, 2, 3] },
            //     { ...chartData.datasets[1], data: [6, 12, 8, 10, 8, 13] },
            //   ],
            // });
          } else {
            // Reset the chart data when it exits the viewport
            // setChartData({
            //   ...chartData,
            //   datasets: [
            //     { ...chartData.datasets[0], data: [0, 0, 0, 0, 0, 0] },
            //     { ...chartData.datasets[1], data: [0, 0, 0, 0, 0, 0] },
            //   ],
            // });
          }
        });
      },
      {
        root: null,
        rootMargin: "0% 0%",
        threshold: 1,
      },
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, [chartData]);

  return (
    <div ref={chartRef} className={styles.chart}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Chart;
