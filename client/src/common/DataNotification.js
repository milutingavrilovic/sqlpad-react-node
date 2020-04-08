import AlertIcon from 'mdi-react/AlertIcon';
import React from 'react';
import Text from './Text';
import Tooltip from './Tooltip';
import styles from './DataNotification.module.css';

function DataNotification({ tooltip, children }) {
  return (
    <Tooltip label={tooltip}>
      {/* span use in place of wrapping Text with forwardRef needed by Tooltip */}
      <span>
        <Text className={styles.text} type="danger">
          <AlertIcon size={18} className={styles.AlertIcon} />
          {children}
        </Text>
      </span>
    </Tooltip>
  );
}

export default DataNotification;
