/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[userid]/': RouteRecordInfo<'/[userid]/', '/:userid', { userid: ParamValue<true> }, { userid: ParamValue<false> }>,
    '/[userid]/posts/': RouteRecordInfo<'/[userid]/posts/', '/:userid/posts', { userid: ParamValue<true> }, { userid: ParamValue<false> }>,
    '/[userid]/posts/[id]': RouteRecordInfo<'/[userid]/posts/[id]', '/:userid/posts/:id', { userid: ParamValue<true>, id: ParamValue<true> }, { userid: ParamValue<false>, id: ParamValue<false> }>,
  }
}
