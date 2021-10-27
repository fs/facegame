import React, { useContext, createContext, useState, useMemo, useCallback, ReactNode } from 'react';
import ErrorDecorator from 'decorators/ErrorDecorator';
import { toast, TypeOptions } from 'react-toastify';

type NotifierContext = {
  message: string;
  type: TypeOptions;
  setError: (message: string) => void;
  setInfo: (message: string) => void;
  setSuccess: (message: string) => void;
  clearMessage: () => void;
};

const NotifierContext = createContext<NotifierContext>({} as NotifierContext);

export const useNotifier = () => {
  const value = useContext(NotifierContext);

  if (value === null) {
    throw new Error('useNotifier cannot be used outside of NotifierProvider');
  }

  return value;
};

type NotifierProviderProps = {
  children: ReactNode;
};

export const NotifierProvider = ({ children }: NotifierProviderProps) => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<TypeOptions>('default');

  const setError = useCallback(
    (errorMessage) => {
      const [parsedMessage] = new ErrorDecorator(errorMessage).getMessages();
      setType(toast.TYPE.ERROR);
      setMessage(parsedMessage);
    },
    [setMessage, setType],
  );

  const setInfo = useCallback(
    (infoMessage) => {
      setType(toast.TYPE.INFO);
      setMessage(infoMessage);
    },
    [setMessage, setType],
  );

  const setSuccess = useCallback(
    (successMessage) => {
      setType(toast.TYPE.SUCCESS);
      setMessage(successMessage);
    },
    [setMessage, setType],
  );

  const clearMessage = useCallback(() => {
    setType('default');
    setMessage('');
  }, [setMessage, setType]);

  const context = useMemo(
    () => ({
      message,
      type,
      setError,
      setInfo,
      setSuccess,
      clearMessage,
    }),
    [message, type, setError, setInfo, setSuccess, clearMessage],
  );

  return <NotifierContext.Provider value={context}>{children}</NotifierContext.Provider>;
};
