// Simulated custom logger middleware
export const logger = (actionType, payload) => {
  const logEntry = `[${new Date().toISOString()}] ACTION: ${actionType}, DATA: ${JSON.stringify(payload)}`;
  localStorage.setItem(`log-${Date.now()}`, logEntry);
};
