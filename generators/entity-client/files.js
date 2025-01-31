const constants = require('generator-jhipster/generators/generator-constants');
const util = require('../util');

const FRONTEND_APP_DIR = constants.ANGULAR_DIR;
const FRONTEND_ROUTES_DIR = `${FRONTEND_APP_DIR}/routes/entities/`;
const FRONTEND_COMPONENTS_DIR = `${FRONTEND_APP_DIR}/lib/entities/`;
const CLIENT_TEMPLATES_DIR = 'svelte';

module.exports = {
	writeFiles,
};

const svelteFiles = {
	entityRoutes: [
		{
			path: FRONTEND_ROUTES_DIR,
			templates: [
				{
					file: 'entity/index.svelte',
					renameTo: generator => `${generator.entityFolderName}/index.svelte`,
				},
				{
					file: 'entity/[id]/view.svelte',
					renameTo: generator => `${generator.entityFolderName}/[id]/view.svelte`,
				},
			],
		},
	],
	entityLib: [
		{
			path: FRONTEND_COMPONENTS_DIR,
			templates: [
				{
					file: 'entity/EntityDeleteModal.svelte',
					renameTo: generator =>
						`${generator.entityFolderName}/${generator.entityAngularName}DeleteModal.svelte`,
				},
				{
					file: 'entity/EntityListActions.svelte',
					renameTo: generator =>
						`${generator.entityFolderName}/${generator.entityAngularName}ListActions.svelte`,
				},
				{
					file: 'entity/EntityTable.svelte',
					renameTo: generator => `${generator.entityFolderName}/${generator.entityAngularName}Table.svelte`,
				},
				{
					file: 'entity/entity-service.js',
					renameTo: generator => `${generator.entityFolderName}/${generator.entityInstance}-service.js`,
				},
			],
		},
	],
	entityE2eTests: [
		{
			templates: [
				{
					file: 'cypress/integration/entities/entity/entity-delete.spec.js',
					renameTo: generator =>
						`cypress/integration/entities/${generator.entityFolderName}/${generator.entityInstance}-delete.spec.js`,
				},
				{
					file: 'cypress/integration/entities/entity/entity-list.spec.js',
					renameTo: generator =>
						`cypress/integration/entities/${generator.entityFolderName}/${generator.entityInstance}-list.spec.js`,
				},
				{
					file: 'cypress/integration/entities/entity/entity-view.spec.js',
					renameTo: generator =>
						`cypress/integration/entities/${generator.entityFolderName}/${generator.entityInstance}-view.spec.js`,
				},
			],
		},
	],
};

function writeFiles() {
	this.writeFilesToDisk(svelteFiles, this, false, `${CLIENT_TEMPLATES_DIR}`);

	util.addEntityToMenu(this, this.entityFolderName, this.entityAngularName, this.entityAngularName);
}
