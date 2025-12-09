/**
 * Example plugin for CogniDocs
 * Logs messages during lifecycle hooks.
 */
export default function myPlugin() {
  return {
    name: 'test-plugin',
    configure(config) {
      console.log('[35m[test-plugin] Configure hook called[0m');
      // Modify config to prove it works
      return { ...config, testPluginActive: true };
    },
    analyze({ graph, files }) {
      console.log('[35m[test-plugin] Analyze hook called[0m');
      console.log(`[35m[test-plugin] Graph has ${Object.keys(graph.nodes).length} nodes[0m`);
    },
    transform({ docs }) {
      console.log('[35m[test-plugin] Transform hook called[0m');
      console.log(`[35m[test-plugin] Transforming ${docs.length} files[0m`);
    },
  };
}
