import displayUtils from '@services/displayUtils';
import { global_FontSize_md, global_FontSize_sm, global_spacer_sm, global_spacer_xs } from '@patternfly/react-tokens';
import { Badge } from '@patternfly/react-core';
import React from 'react';
import { CacheType } from '@services/infinispanRefData';

const CacheTypeBadge = (props: { cacheType: string; small: boolean; cacheName: string }) => {
  const cacheTypeEnum = CacheType[props.cacheType];

  return (
    <Badge
      data-cy={`type-${props.cacheName}`}
      style={{
        backgroundColor: displayUtils.cacheTypeLabelBackgroundColor(cacheTypeEnum),
        color: displayUtils.cacheTypeLabelTextColor(cacheTypeEnum),
        fontSize: props.small ? global_FontSize_sm.value : global_FontSize_md.value,
        fontWeight: 'lighter',
        padding: global_spacer_xs.value,
        paddingRight: global_spacer_sm.value,
        paddingLeft: global_spacer_sm.value
      }}
    >
      {props.cacheType}
    </Badge>
  );
};
export { CacheTypeBadge };
