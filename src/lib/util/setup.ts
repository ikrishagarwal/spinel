import { RedisCacheClient } from '#lib/redis-cache/RedisCacheClient';
import { loadTags } from '#utils/tags';
import { setup } from '@skyra/env-utilities';
import { Doc } from 'discordjs-docs-parser';
import { URL } from 'node:url';

process.env.NODE_ENV ??= 'development';

Doc.setGlobalOptions({
	escapeMarkdownLinks: true
});

setup(new URL('../../../.env', import.meta.url));

await loadTags();

new RedisCacheClient();
