// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Manage a specification.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as impart from "@impart-security/pulumi-impart";
 *
 * // Create a new specification
 * const example = new impart.Spec("example", {
 *     name: "spec_example",
 *     sourceFile: `${path.module}/spec.yaml`,
 *     sourceHash: "<sha256 hash for the source_file content>",
 * });
 * ```
 *
 * ## Import
 *
 * #!/bin/bash
 *
 * ```sh
 *  $ pulumi import impart:index/spec:Spec example "<id>"
 * ```
 */
export class Spec extends pulumi.CustomResource {
    /**
     * Get an existing Spec resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpecState, opts?: pulumi.CustomResourceOptions): Spec {
        return new Spec(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'impart:index/spec:Spec';

    /**
     * Returns true if the given object is an instance of Spec.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Spec {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Spec.__pulumiType;
    }

    /**
     * The name for this specification.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The specification file.
     */
    public readonly sourceFile!: pulumi.Output<string>;
    /**
     * The specification source hash.
     */
    public readonly sourceHash!: pulumi.Output<string | undefined>;

    /**
     * Create a Spec resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpecArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SpecArgs | SpecState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SpecState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sourceFile"] = state ? state.sourceFile : undefined;
            resourceInputs["sourceHash"] = state ? state.sourceHash : undefined;
        } else {
            const args = argsOrState as SpecArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.sourceFile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceFile'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["sourceFile"] = args ? args.sourceFile : undefined;
            resourceInputs["sourceHash"] = args ? args.sourceHash : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Spec.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Spec resources.
 */
export interface SpecState {
    /**
     * The name for this specification.
     */
    name?: pulumi.Input<string>;
    /**
     * The specification file.
     */
    sourceFile?: pulumi.Input<string>;
    /**
     * The specification source hash.
     */
    sourceHash?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Spec resource.
 */
export interface SpecArgs {
    /**
     * The name for this specification.
     */
    name: pulumi.Input<string>;
    /**
     * The specification file.
     */
    sourceFile: pulumi.Input<string>;
    /**
     * The specification source hash.
     */
    sourceHash?: pulumi.Input<string>;
}
